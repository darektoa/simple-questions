const StringHelper = {
    join(separator, ...values) {
      if(!values.length) return '';
      return values.reduce((tempResult, value) => (
        !value ? tempResult : `${tempResult}${separator}${value}`
      ));
    },

    
    joinClass(...values) {
      return StringHelper.join(' ', ...values);
    },
  
    
    upperFirst(value) {
      if(!value.length && typeof(value) !== 'string') return '';
      return value[0].toUpperCase() + value.slice(1);
    },
};

export default StringHelper;
export const {
    join,
    joinClass,
    upperFirst,
} = StringHelper;