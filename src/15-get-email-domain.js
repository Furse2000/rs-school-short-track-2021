function getEmailDomain(str) {
  let domain = '';
  let temp = 0;
  for (let i = 0; i < str.length; i++) {
    if (temp) {
      domain += str[i];
    }
    if (str[i] === '@') {
      temp++;
      if (temp === 2) {
        domain = '';
      }
    }
  }
  return domain;
}

module.exports = getEmailDomain;
