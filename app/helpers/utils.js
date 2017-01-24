export function formatUserInfo (name, avatar, uid) {
  return {
    name,
    avatar,
    uid,
  }
}

export function formatDecision (title, firstOption, secondOption, user) {
  return {
    timestamp: Date.now(),
    author: user,
    title: title,
    firstOption: {
      text: firstOption,
      selectedCount: 0,
    },
    secondOption: {
      text: secondOption,
      selectedCount: 0,
    }
  }
}
