const generateTitle = (title) => {
  if (title.english) {
    return title.english.slice(0, 35);
  } else if (title.userPreferred) {
    return title.userPreferred.slice(0, 35);
  } else if (title.romaji) {
    return title.romaji.slice(0, 35);
  } else {
    return title.slice(0, 35);
  }
};

export default generateTitle;
