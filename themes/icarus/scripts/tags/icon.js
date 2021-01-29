'use strict';

module.exports = ctx => function(args) {
  let icon = args[0].trim();
  if (icon.length > 0) {
      if (icon.startsWith('fa')) { // fontawesome icon
          let p = icon.indexOf('-');
          if (p !== -1) {
              icon = `<i class="${icon.substring(0, p)} 
                      fa-${icon.substring(p+1, icon.length)} mr-2"></i>`;
          } else {
              icon = `<i class="${icon} mr-2"></i>`;
          }
      } else {
          icon = `<i class="${icon} mr-2"></i>`;
      }
  }

  return icon;
};