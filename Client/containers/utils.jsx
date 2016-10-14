export function fade (el) {
 $(el).fadeIn(1000);
 $(el).fadeOut(1000);
}

export function parse(res) {
  let apos = res.indexOf("*");
  if (apos > -1) {
    let split = res.split("");
    split.splice(apos, 1,"'")
    return split.join('')
  } else {
    return res;
  }
}