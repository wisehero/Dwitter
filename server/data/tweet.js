export async function getAllByUsername(username) {
  return Tweet.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
  });
}

export async function getById(id) {
  return Tweet.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
}

export async function create(text, userId) {
  return Tweet.create({ text, userId }).then((data) =>
    this.getById(data.dataValues.id)
  );
}

export async function update(id, text) {
  return Tweet.findByPk(id, INCLUDE_USER).then((tweet) => {
    tweet.text = text;
    return tweet.save();
  });
}

export async function remove(id) {
  return Tweet.findByPk(id).then((tweet) => {
    tweet.destroy();
  });
}
