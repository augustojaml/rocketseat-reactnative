import { addMonths, format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TransactionStorage } from '../global/storages/TransactionStorage';
import { categories } from '../global/utils/categories';
import { FormatValue } from '../global/utils/FormatValue';

interface ITransactionProvider {
  children: ReactNode;
}

export interface ITransaction {
  id: string;
  name: string;
  amount: string;
  type: 'positive' | 'negative';
  category: string;
  date: Date;
}

export interface ITransactionDetail {
  id: string;
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface ITotals {
  positive: string;
  negative: string;
  total: string;
}

export interface IGraphicData {
  category: string;
  color: string | undefined;
  totalCategory: number;
  totalCategoryFormatted: string;
  percent: string;
}

interface ITransactionContext {
  transactions: ITransaction[] | undefined;
  transactionsDetail: ITransactionDetail[] | undefined;
  saveTransaction: (transaction: ITransaction) => Promise<void>;
  totals: ITotals | undefined;
  isLoading: boolean;
  loadingTransactions: () => Promise<void>;
  loadingGraphic: () => Promise<void>;
  graphicsData: IGraphicData[] | undefined;
  currentDate: Date;
  currentCalendar: string;
  previousDate: () => Promise<void>;
  nextDate: () => Promise<void>;
}

const TransactionContext = createContext({} as ITransactionContext);

function TransactionProvider({ children }: ITransactionProvider) {
  const [transactions, setTransactions] = useState<ITransaction[]>();
  const [transactionsDetail, setTransactionDetail] =
    useState<ITransactionDetail[]>();
  const [totals, setTotals] = useState<ITotals>();
  const [graphicsData, setGraphicsData] = useState<IGraphicData[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentCalendar, setCurrentCalendar] = useState(
    format(new Date(), 'MMMM, yyyy', { locale: ptBR })
  );

  async function saveTransaction(transaction: ITransaction) {
    await TransactionStorage.setData(transaction);
  }

  async function loadingGraphic() {
    setIsLoading(true);
    const data = await TransactionStorage.getData();

    const negativeTransactions = data?.filter(
      (transaction) =>
        transaction.type === 'negative' &&
        new Date(transaction.date).getMonth() === currentDate.getMonth() &&
        new Date(transaction.date).getFullYear() === currentDate.getFullYear()
    );

    const unique = [
      ...new Set(negativeTransactions?.map((item) => item.category)),
    ];

    let graphicValue: IGraphicData[] = [];

    unique.forEach((value) => {
      let sum = 0;
      let total = 0;
      const category = categories.filter((item) => item.key === value)[0];
      negativeTransactions?.map((transaction) => {
        if (value === transaction.category) {
          sum = sum + Number(transaction.amount);
        }
        total = total + Number(transaction.amount);
      });
      graphicValue.push({
        category: category.name,
        color: category.color,
        totalCategory: sum,
        totalCategoryFormatted: FormatValue.currency(String(sum)),
        percent: `${((sum / total) * 100).toFixed(0)}%`,
      });
    });
    setGraphicsData(graphicValue);
    setIsLoading(false);
  }

  async function loadingTransactions() {
    setIsLoading(false);
    const data = await TransactionStorage.getData();

    let positive = 0;
    let negative = 0;

    setTransactions(data);
    const formattedTransaction: ITransactionDetail[] = data.map(
      (transaction) => {
        if (transaction.type === 'positive') {
          positive += Number(transaction.amount);
        }
        if (transaction.type === 'negative') {
          negative += Number(transaction.amount);
        }

        return {
          id: transaction.id,
          name: transaction.name,
          amount: FormatValue.currency(transaction.amount),
          type: transaction.type,
          category: transaction.category,
          date: FormatValue.DateFullYear(transaction.date),
        };
      }
    );
    setTotals({
      positive: FormatValue.currency(String(positive)),
      negative: FormatValue.currency(String(negative)),
      total: FormatValue.currency(String(positive - negative)),
    });
    setTransactionDetail(formattedTransaction);
    setIsLoading(false);
  }

  async function previousDate() {
    setCurrentDate((state) => subMonths(state, 1));
  }

  async function nextDate() {
    setCurrentDate((state) => addMonths(state, 1));
  }

  useEffect(() => {
    let isActive = true;
    (async () => {
      await loadingTransactions();
    })();
    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    (async () => {
      setCurrentCalendar(format(currentDate, 'MMMM, yyyy', { locale: ptBR }));
      await loadingGraphic();
    })();
  }, [currentDate]);

  return (
    <>
      <TransactionContext.Provider
        value={{
          transactions,
          saveTransaction,
          transactionsDetail,
          totals,
          isLoading,
          loadingTransactions,
          loadingGraphic,
          graphicsData,
          currentDate,
          currentCalendar,
          previousDate,
          nextDate,
        }}
      >
        {children}
      </TransactionContext.Provider>
    </>
  );
}

function useTransaction() {
  return useContext(TransactionContext);
}

export { TransactionProvider, useTransaction };
