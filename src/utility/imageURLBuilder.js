const imageURLBuilder = (url, h, w) => {
  if (typeof url !== 'string') {
    return '';
  }
  let baseURL = 'https://cdn.sanity.io/images/cx7chxi9/blog/';
  let fileType = url.slice(-3);
  var regexImage = /image-/gi;
  let main = url.replace(regexImage, '').split("").slice(0, -4).join("");
  let height;
  let width;
  if (h || w) {
    height = h || null;
    width = w || null;
  }
  if (height) {
    height = `h=${height}`;
  }
  if (width) {
    width = `w=${width}`;
  }
  var imageString = baseURL + main + '.' + fileType;
  if (height) {
    imageString += `?${height}`;
    if (width) {
      imageString += `&${width}`
    }
    return imageString;
  } else if (width) {
    imageString += `?${width}`;
    return imageString; 
  } else {
    return imageString;
  }
}

export default imageURLBuilder;