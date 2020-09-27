const formatMoney = (rp) => {
  const intNominal = rp ? parseInt(rp) : 0
  return intNominal
    .toFixed(3)
    .replace(/^([\d,]+)$|^([\d,]+)\.0*$|^([\d,]+\.[0-9]*?)0*$/, '$1$2$3')
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
export default { formatMoney }
