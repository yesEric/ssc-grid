import { cloneElement } from 'react';
import ReactDOM from 'react-dom';

export function shouldWarn(about) {
  console.error.expected.push(about); // eslint-disable-line no-console
}

/**
 * Helper for rendering and updating props for plain class Components
 * since `setProps` is deprecated.
 * @param  {ReactElement} element     Root element to render
 * @param  {HTMLElement?} mountPoint  Optional mount node, when empty it uses an unattached div like `renderIntoDocument()`
 * @return {ComponentInstance}        The instance, with a new method `renderWithProps` which will return a new instance with updated props
 */
export function render(element, mountPoint) {
  let mount = mountPoint || document.createElement('div');
  let instance = ReactDOM.render(element, mount);

  if (instance && !instance.renderWithProps) {
    instance.renderWithProps = newProps => {

      return render(
        cloneElement(element, newProps), mount);
    };
  }

  return instance;
}

export function getOne(collection) {
  expect(collection.length).to.equal(1);
  return collection[0];
}

/**
 * debug
 */

// 打印节点类型
export function printType(element) {
  let types = ['HTMLElement', 'NodeList'];
  types.forEach(type => console.log(type, element instanceof window[type]));
}

export function printChromeVersion() {
  let raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
  console.log('Chrome version:', raw ? parseInt(raw[2], 10) : false);
}

/**
 * Grid helper function
 */

export function getTableHead(instance) {
  let node = ReactDOM.findDOMNode(instance); // <div> root node
  let table = node.querySelector('table'); // <table>
  return table.querySelector('thead'); // <thead>
}

export function getTableHeadColumn(instance, index) {
  let ths = getTableHead(instance).querySelectorAll('th');
  return ths[index];
}

// 获得指定列头中的文本
// <th> -> textContent
export function getTableHeadColumnContent(instance, index) {
  return getTableHeadColumn(instance, index).textContent;
}

export function getTableBody(instance) {
  let node = ReactDOM.findDOMNode(instance); // <div> root node
  let table = node.querySelector('table'); // <table>
  return table.querySelector('tbody'); // <tbody>
}

// 得到行号为index（从0开始）的行DOM节点
export function getTableRow(instance, index) {
  let tbody = getTableBody(instance);
  let trs = tbody.querySelectorAll('tr');
  return trs[index];
}

/**
 * Get <td> element
 *
 * +--------+--------+--------+
 * |   H1   |   H2   |   H3   |
 * +--------+--------+--------+
 * |  R0C0  |  R0C1  |  R0C2  |
 * +--------+--------+--------+
 * |  R1C0  |  R1C1  |  R1C2  |
 * +--------+--------+--------+
 *
 * `getTableCell(instance, 1, 1)` returns `<td>R1C1</td>`
 *
 * @export
 * @param {any} instance React component instance
 * @param {number} rowIndex row index in table body
 * @param {number} columnIndex column index in table body
 * @returns {HTMLElement}
 */
export function getTableCell(instance, rowIndex, columnIndex) {
  let trN = getTableRow(instance, rowIndex); // trN -> <tr> node
  let tds = trN.querySelectorAll('td'); // tds -> <td> node list
  return tds[columnIndex];
}

/**
 * Get the text content in <td> element
 * The row index and column index works exactly as `getTableCell()`
 *
 * @export
 * @param {any} instance React component instance
 * @param {number} rowIndex row index in table body
 * @param {number} columnIndex column index in table body
 * @returns {string} the text content in <td> element
 */
export function getTableCellContent(instance, rowIndex, columnIndex) {
  return getTableCell(instance, rowIndex, columnIndex).textContent;
}

/**
 * Form组件 helper function
 */

export function getForm(instance) {
  return ReactDOM.findDOMNode(instance);
}

export function getInput(instance, index) {
  const node = ReactDOM.findDOMNode(instance);
  return node.querySelectorAll('input')[index];
}

export function getSubmitButton(component) {
  let formNode = getForm(component);
  return formNode.querySelector('button[type=submit]');
}
