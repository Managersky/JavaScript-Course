const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
const selectAllBtn = document.getElementById("selectAll");
const uncheckAllBtn = document.getElementById("uncheckAll");
const deleteListBtn = document.getElementById("deleteList");

function addItem(e) {
	e.preventDefault();
	const text = this.querySelector("[name=item]").value;
	const item = {
		text: text,
		done: false
	};
	items.push(item);
	populateList(items, itemsList);
	localStorage.setItem("items", JSON.stringify(items)); //add to Local Storage
	this.reset();
}

function populateList(plates = [], platesList) {
	platesList.innerHTML = plates
		.map((plate, i) => {
			return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${
				plate.done ? "checked" : ""
			} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
		})
		.join("");
}

function toggleDone(e) {
	if (!e.target.matches("input")) return; // skip this unless it's an input
	// console.log(e.target);
	const el = e.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem("items", JSON.stringify(items));
	populateList(items, itemsList);
}

function selectAll(e) {
	items.forEach(item => (item.done = true));
	localStorage.setItem("items", JSON.stringify(items));
	populateList(items, itemsList);
}

function unchecktAll(e) {
	items.forEach(item => (item.done = false));
	localStorage.setItem("items", JSON.stringify(items));
	populateList(items, itemsList);
}

function removeAll(e) {
	if (items.length > 0) {
		items.length = 0;
	}
	localStorage.removeItem("items");
	populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
selectAllBtn.addEventListener("click", selectAll);
uncheckAllBtn.addEventListener("click", unchecktAll);
deleteListBtn.addEventListener("click", removeAll);

populateList(items, itemsList);
