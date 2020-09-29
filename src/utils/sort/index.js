

export const ascSorting = (data) => {
  return data.sort((a, b) => {
    var curName = a.name.toUpperCase(); 
    var nextName = b.name.toUpperCase();
    return curName < nextName ? -1 : 
       curName > nextName ? 1 : 0
  })
}
 
export const descSorting = (data) => {
  return data.sort((a, b) => {
    var curName = a.name.toUpperCase(); 
    var nextName = b.name.toUpperCase();
    return curName > nextName ? -1 : 
       curName < nextName ? 1 : 0
  })
}