// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(str, username, comment) {
  return `${str[0] + username.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;') + str[1] + comment
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')}"`;
}

module.exports = html;
