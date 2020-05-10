$(function () {
	// There's the list of div and box
	var $gallery = $('#gallery'),
		$box = $('#box');

	// Let the list items be draggable
	$('div', $gallery).draggable({
		revert: 'invalid', // when not dropped, the item will revert back to its initial position
		containment: 'document', //working only on this area
		helper: 'clone',
		cursor: 'move',
	});

	// Let the box be droppable, accepting the list items
	$box.droppable({
		accept: '#gallery > div',
		drop: function (event, ui) {
			if (!$box[0].firstChild) {
				//if box is empty -> add item
				addItem(ui.draggable);
			} //if box is fill then swap item
			else {
				$(ui.draggable).swapWith($box[0].firstChild);
			}
		},
	});

	// Let the list be droppable as well, accepting items from the box
	$gallery.droppable({
		accept: '#box div',
		drop: function (event, ui) {
			backItem(ui.draggable);
		},
	});

	// Add item function
	function addItem($item) {
		$item.fadeOut(function () {
			const $list = $('div', $box).length
				? $('div', $box)
				: $($item).appendTo($box);
			console.log($('div', $box));
			$item.appendTo($list).fadeIn(function () {
				$item;
			});
		});
	}

	// Swap item function
	$.fn.swapWith = function (that) {
		const $this = this;
		const $that = $(that);

		// create temporary placeholder
		const $temp = $('<div>');

		// 3-step swap
		$this.before($temp);
		$that.before($this);
		$temp.after($that).remove();

		return $this;
	};

	// Back item to list function
	function backItem($item) {
		$item.fadeOut(function () {
			$item.appendTo($gallery).fadeIn();
		});
	}
});
