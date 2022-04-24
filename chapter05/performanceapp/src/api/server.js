module.exports = () => {
  const data = {
    friend: [],
  };

  for (let index = 0; index < 500; index++) {
    data.friend.push({
      id: index + 1,
      likes: 5,
      name: `Friend ${index + 1}`,
    });
  }

  return data;
};
