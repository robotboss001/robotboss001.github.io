// priority: 0

onEvent('jei.hide.items', event => {
	
	event.hide([
		'kubejs:dummy_fluid_item',
		/appliedenergistics2:facade/,
		'thermal:copper_block', 
		'create:copper_block', 
		'mekanism:block_copper', 
		'iceandfire:copper_block', 
		'thermal:copper_ore', 
		'tconstruct:copper_block', 
		'create:copper_nugget', 
		'mekanism:ingot_copper', 
		'iceandfire:copper_nugget', 
		'mekanism:nugget_copper', 
		'create:copper_ore', 
		'iceandfire:copper_ore', 
		'create:copper_ingot', 
		'iceandfire:copper_ingot', 
		'create:crushed_copper_ore', 
		'mekanism:dust_copper', 
		'tconstruct:copper_nugget', 
		'create:copper_sheet', 
		'mekanism:copper_ore', 
		'tconstruct:copper_ingot', 
		'tconstruct:copper_ore', 
		'thermal:copper_ingot'
	])
})

onEvent('jei.add.items', event => {
	
	event.add(
		Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}')
	)
})