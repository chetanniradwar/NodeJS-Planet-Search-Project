function getPagination(page , limit)
{
        const DEFAULT_PAGE = 1;
        const DEFAULT_LIMIT = 0 ;
    const toLimit = Math.abs(limit) || DEFAULT_LIMIT 
  const toSkip = ( Math.abs(page) -1 ) * toLimit ;

  return {toSkip , toLimit}


}

module.exports = {getPagination}