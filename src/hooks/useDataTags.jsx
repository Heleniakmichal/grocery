

function useDataTags(props) {
  const altsection = document.querySelectorAll('altsection');
  
  altsection.forEach(e => {
    let dataTagItem = e.getAttribute('dataTag');
    let dataImgItem = e.getAttribute('dataImg');
    let dataLinkItem = e.getAttribute('dataLink');
    if (dataTagItem === "banner" && dataTagItem !== undefined) {
      let link = document.createElement('a');
      link.setAttribute('href', dataLinkItem);
      let banner = document.createElement('img');
      banner.setAttribute('src', dataImgItem);
      banner.setAttribute('alt', dataTagItem);
      link.append(banner);
      return (
        e.append(link)
      )
    }
  })


}

export default useDataTags;