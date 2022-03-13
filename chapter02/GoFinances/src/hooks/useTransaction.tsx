import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TransactionStorage } from '../global/storages/TransactionStorage';
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

interface ITransactionContext {
  transactions: ITransaction[] | undefined;
  transactionsDetail: ITransactionDetail[] | undefined;
  saveTransaction: (transaction: ITransaction) => Promise<void>;
  totals: ITotals | undefined;
  isLoading: boolean;
  loadingTransactions: () => Promise<void>;
}

const TransactionContext = createContext({} as ITransactionContext);

function TransactionProvider({ children }: ITransactionProvider) {
  const [transactions, setTransactions] = useState<ITransaction[]>();
  const [transactionsDetail, setTransactionDetail] =
    useState<ITransactionDetail[]>();

  const [totals, setTotals] = useState<ITotals>();

  const [isLoading, setIsLoading] = useState(true);

  async function saveTransaction(transaction: ITransaction) {
    await TransactionStorage.setData(transaction);
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

  useEffect(() => {
    let isActive = true;
    (async () => {
      await loadingTransactions();
    })();
    return () => {
      isActive = false;
    };
  }, []);

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
