const topBlock = document.querySelector('.top-block');
const area = document.querySelector('.area');
const editBlock = document.querySelector('.edit-block');
const styleBlock = document.querySelector('.style-block');
const mainBlock = document.querySelector('.main-block');
const addBlock = document.querySelector('.add-block');
const formCreateTable = document.querySelector('.formCreateTable');
const formCreateList = document.querySelector('.formCreateList');
function editBtn() {
    area.value = topBlock.innerHTML;
    editBlock.classList.remove('hidden');
    styleBlock.classList.add('hidden');
    document.forms['formSize'].reset();
    document.forms['formFamily'].reset();
    document.forms['formColors'].reset();
    document.forms['formStyle'].reset();
}
function saveBtn() {
    topBlock.innerHTML = area.value;
    editBlock.classList.add('hidden');
}
function styleBtn() {
    editBlock.classList.add('hidden');
    styleBlock.classList.remove('hidden');
}
function addBtn() {
    mainBlock.classList.add('hidden');
    addBlock.classList.remove('hidden');
}
function backBtn() {
    mainBlock.classList.remove('hidden');
    addBlock.classList.add('hidden');
}
function fontSize() {
    topBlock.style.fontSize = event.target.value;
}
function fontFamily() {
    topBlock.style.fontFamily = event.target.value;
}
function fontWeight() {
    topBlock.style.fontWeight = event.target.checked ? 'bold' : 'normal';
}
function boxColorsForColor() {
    document.querySelector('.boxColors').classList.remove('hidden');
}
function boxColorsForBackground() {
    document.querySelector('.boxBackgroundColors').classList.remove('hidden');
}
function addColor() {
    topBlock.style.color = event.target.dataset.red;
    topBlock.style.color = event.target.dataset.blue;
    topBlock.style.color = event.target.dataset.green;
    topBlock.style.color = event.target.dataset.black;
    topBlock.style.color = event.target.dataset.yellow;
    topBlock.style.color = event.target.dataset.pink;
    topBlock.style.color = event.target.dataset.white;
    topBlock.style.color = event.target.dataset.violet;
    topBlock.style.color = event.target.dataset.lightseagreen;
    document.querySelector('.boxColors').classList.add('hidden');
}
function addBackgroundColor() {
    topBlock.style.backgroundColor = event.target.dataset.red;
    topBlock.style.backgroundColor = event.target.dataset.blue;
    topBlock.style.backgroundColor = event.target.dataset.green;
    topBlock.style.backgroundColor = event.target.dataset.black;
    topBlock.style.backgroundColor = event.target.dataset.yellow;
    topBlock.style.backgroundColor = event.target.dataset.pink;
    topBlock.style.backgroundColor = event.target.dataset.white;
    topBlock.style.backgroundColor = event.target.dataset.violet;
    topBlock.style.backgroundColor = event.target.dataset.lightseagreen;
    document.querySelector('.boxBackgroundColors').classList.add('hidden');
}
function fontStyle() {
    event.target.checked ? topBlock.classList.add('style') : topBlock.classList.remove('style');
}
function chooseBtn() {
    if (event.target.dataset.create === 'table') {
        formCreateTable.classList.remove('hidden');
        formCreateList.classList.add('hidden');
    }
    else if (event.target.dataset.create === 'list') {
        formCreateTable.classList.add('hidden');
        formCreateList.classList.remove('hidden');
    }
}
function chooseBorderType() {
    let form = document.forms['formCreateTable'];
    let result = form.borderType.value;
    return result;
}
function chooseBorderColor() {
    let form = document.forms['formCreateTable'];
    let result = form.borderColor.value;
    return result;
}
function createTable() {
    let form = document.forms['formCreateTable'];
    let countTr = form.countTr.value;
    let countTd = form.countTd.value;
    let widthTd = form.widthTd.value;
    let heightTd = form.heightTd.value;
    let borderWidth = form.borderWidth.value;
    let borderType = chooseBorderType();
    let borderColor = chooseBorderColor();
    let styleTd = `width: ${widthTd}px; height: ${heightTd}px; border: ${borderWidth}px ${borderType} ${borderColor}`;
    area.value += '<table>';
    for (let i = 1; i <= countTr; i++) {
        area.value += '<tr>';
        for (let j = 1; j <= countTd; j++) {
            area.value += `<td style="${styleTd}">TD</td>`;
        }
        area.value += '</tr>';
    }
    area.value += '</table>';
    form.classList.add('hidden');
    backBtn();
    form.reset();
}
function chooseMarkType() {
    let form = document.forms['formCreateList'];
    let result = form.markType.value;
    return result;
}
function createList() {
    let form = document.forms['formCreateList'];
    let countLi = form.countLi.value;
    let markType = chooseMarkType();
    area.value += `<ul style="margin-left: -20px; list-style:${markType}">`;
    for (let i = 1; i <= countLi; i++) {
        area.value += `<li>item${i}</li>`;
    }
    area.value += '</ul>';
    form.classList.add('hidden');
    backBtn();
    form.reset();
}