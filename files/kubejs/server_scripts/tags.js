// priority: 0

onEvent('item.tags', event => {
	event.removeAllTagsFrom([
							 'mekanism:dust_copper',
							 'mekanism:ingot_copper', 
							 'mekanism:nugget_copper', 
							 'create:crushed_copper_ore', 
							 'create:copper_sheet', 
							 'create:copper_nugget', 
							 'create:copper_ingot',  
							 'create:copper_ore', 
							 'tconstruct:copper_ore',  
							 'tconstruct:copper_ingot', 
							 'tconstruct:copper_nugget', 
							 'iceandfire:copper_nugget', 
							 'iceandfire:copper_ingot',  
							 'iceandfire:copper_ore', 
							 'mekanism:copper_ore', 
							 'thermal:copper_ingot', 
							 'create:copper_block', 
							 'mekanism:block_copper', 
							 'iceandfire:copper_block', 
							 'thermal:copper_block', 
							 'thermal:copper_ore', 
							 'tconstruct:copper_block', 
							 'create:crushed_silver_ore', 
							 'iceandfire:silver_nugget', 
							 'iceandfire:silver_ingot', 
							 'iceandfire:silver_block', 
							 'iceandfire:silver_ore', 
							 'titanium:diamond_gear', 
							 'mekanism:dust_diamond', 
							 'createaddition:diamond_grit',
							 'lazierae2:coal_dust', 
							 'tconstruct:tinkers_bronze_nugget', 
							 'tconstruct:tinkers_bronze_ingot', 
							 'tconstruct:tinkers_bronze_block', 
							 'mekanism:dust_bronze', 
							 'mekanism:nugget_bronze', 
							 'mekanism:ingot_bronze', 
							 'mekanism:block_bronze',
							 'mekanism:dust_emerald',
							 'mekanism:dust_lapis_lazuli',
							 'mekanism:dust_quartz',
							 'appliedenergistics2:nether_quartz_dust',
							 'appliedenergistics2:gold_dust',
							 'titanium:gold_gear',
							 'mekanism:dust_gold',
							 'create:golden_sheet',
							 'create:crushed_gold_ore',
							 'mekanism:block_lead',
							 'mekanism:nugget_lead',
							 'mekanism:dust_lead',
							 'mekanism:lead_ore',
							 'mekanism:ingot_lead'
							])	

	event.add('forge:ores', 'cavesandcliffs:deepslate_diamond_ore')
	event.add('forge:ores/diamond', 'cavesandcliffs:deepslate_diamond_ore')
	event.add('forge:ores', 'cavesandcliffs:deepslate_coal_ore')
	event.add('forge:ores/coal', 'cavesandcliffs:deepslate_coal_ore')
	event.add('forge:ores', 'cavesandcliffs:deepslate_lapis_ore')
	event.add('forge:ores/lapis', 'cavesandcliffs:deepslate_lapis_ore')
	event.add('forge:ores', 'cavesandcliffs:deepslate_redstone_ore')
	event.add('forge:ores/redstone', 'cavesandcliffs:deepslate_redstone_ore')
	event.add('forge:ores', 'cavesandcliffs:deepslate_emerald_ore')
	event.add('forge:ores/emerald', 'cavesandcliffs:deepslate_emerald_ore')


})

onEvent('block.tags', event => {
	event.removeAllTagsFrom([
							 'create:copper_ore',
							 'iceandfire:copper_ore',
							 'mekanism:copper_ore',
							 'tconstruct:copper_ore', 
							 'create:copper_block', 
							 'mekanism:block_copper', 
							 'iceandfire:copper_block', 
							 'thermal:copper_block', 
							 'thermal:copper_ore', 
							 'tconstruct:copper_block', 
							 'iceandfire:silver_block', 
							 'iceandfire:silver_ore', 
							 'tconstruct:tinkers_bronze_block', 
							 'mekanism:block_bronze',
							 'mekanism:block_lead',
							 'mekanism:lead_ore'
							])
	
})