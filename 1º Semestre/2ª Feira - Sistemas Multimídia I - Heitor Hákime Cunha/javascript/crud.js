var crud = (function () {
	//delete localStorage.grid;
	if (!localStorage.grid)
		localStorage.grid = JSON.stringify([
		{ id: 1, nome: "João", idade: 20, endereco: "Rua 1", telefone: "(16) 3704-2342", email: "joao@email.com" },
		{ id: 2, nome: "Bruno", idade: 21, endereco: "Rua 2", telefone: "(16) 3704-2354", email: "bruno@email.com" },
		{ id: 3, nome: "Lenon", idade: 18, endereco: "Rua 3", telefone: "(16) 3704-2732", email: "lenon@email.com" }
	]);

	var updateGrid = function() {
		var grid = JSON.parse(localStorage.grid),
			tbody = document.querySelector("#grid tbody");

		if (!grid.length) {
			tbody.innerHTML = '<tr><td colspan="6" style="text-align: center">Nenhum registro cadastrado...</td></tr>';
			return;				
		}

		tbody.innerHTML = "";
		for (var i = 0; i < grid.length; i++)
			tbody.innerHTML += 
				'<tr data-id="' + grid[i].id + '">' + 
					'<td>' + grid[i].nome + '</td>' +
					'<td style="text-align: center">' + grid[i].idade + '</td>' +
					'<td>' + grid[i].endereco + '</td>' +
					'<td>' + grid[i].telefone + '</td>' +
					'<td>' + grid[i].email + '</td>' +
					'<td>' + 
						'<button type="button" class="editar" onclick="crud.openForm(' + grid[i].id + ')"></button>' +
						'<button type="button" class="excluir" onclick="crud.deleteItem(' + grid[i].id + ')"></button>' +
					'</td>' +
				'</tr>';
	};

	var openForm = function (id) {
		if (!id) {
			document.querySelector("#fieldsetForm").style.display = "block";
			return;
		}

		var itemGrid = JSON.parse(localStorage.grid).filter(function (item) { return item.id == id; })[0];
		document.querySelector("#id").value = itemGrid.id;
		document.querySelector("#nome").value = itemGrid.nome;
		document.querySelector("#idade").value = itemGrid.idade;
		document.querySelector("#endereco").value = itemGrid.endereco;
		document.querySelector("#telefone").value = itemGrid.telefone;
		document.querySelector("#email").value = itemGrid.email;
		document.querySelector("#fieldsetForm").style.display = "block";
	};

	var closeForm = function () {
		document.querySelector("#fieldsetForm").style.display = "none";
		var inputs = document.querySelectorAll("#fieldsetForm input");
		for (var i = 0; i < inputs.length; i++)
			inputs[i].value = "";
	};

	var updateItem = function () {
		var grid = JSON.parse(localStorage.grid),
			item = {
				id: document.querySelector("#id").value,
				nome: document.querySelector("#nome").value.trim(),
				idade: document.querySelector("#idade").value.trim(),
				endereco: document.querySelector("#endereco").value.trim(),
				telefone: document.querySelector("#telefone").value.trim(),
				email: document.querySelector("#email").value.trim()
			};

		if (!/^[a-zA-Z ]{2,}$/.test(item.nome)) {
			alert("Nome inválido");
			return;
		}

		if (!/^[\d]{1,99}$/.test(item.idade)) {
			alert("Idade deve ser um número entre 1 e 99");
			return;
		}

		if (!/^([0-9]{2}) [0-9]{4,5}-[0-9]{4}$/.test(item.telefone)) {
			alert("Telefone deve ter o formato \"(00) 00000-0000\"");
			return;
		}

		if (!item.id) {
			item.id = grid.length ? grid[grid.length - 1].id + 1 : 1;
			grid.push(item);
		} else {
			var index = grid.indexOf(grid.filter(function (itemGrid) { return itemGrid.id == item.id; })[0]);
			grid[index] = item;
		}

		localStorage.grid = JSON.stringify(grid);
		updateGrid();
		closeForm();
		return false;
	};

	var deleteItem = function (id) {
		if (!confirm("Deseja realmente deletar este item?"))
			return;

		var grid = JSON.parse(localStorage.grid);
		grid = grid.filter(function (item) { return item.id != id; });
		localStorage.grid = JSON.stringify(grid);
		updateGrid();
	};

	return {
		updateGrid: updateGrid,
		openForm: openForm,
		closeForm: closeForm,
		updateItem: updateItem,
		deleteItem: deleteItem
	};
})();
