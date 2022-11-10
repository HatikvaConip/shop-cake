const cn = (...props) => {
    let composed = '';
    (props || []).forEach(str => {
      composed = `${composed} ${str}`
    });
    return composed;
  };

  export default cn;