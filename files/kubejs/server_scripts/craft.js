
onEvent('recipes', event =>{

    
    event.custom({
        type: "extendedcrafting:compressor",
        powerCost: 1000000,
        inputCount : 32,
        ingredient: {
            item: "draconicevolution:reactor_core"
        },
        catalyst:{
            item: "extendedcrafting:crystaltine_catalyst"
        },
        result:{
            item: 'kubejs:roboss_ingot'
        }
    })
    event.custom({
        type: "extendedcrafting:compressor",
        powerCost: 1000000,
        inputCount : 32,
        ingredient: {
            item: "projectex:pink_matter"
        },
        catalyst:{
            item: "extendedcrafting:crystaltine_catalyst"
        },
        result:{
            item: 'kubejs:kikongin_ingot'
        }
    })
    event.custom({
        type: "extendedcrafting:compressor",
        powerCost: 1000000,
        inputCount : 64,
        ingredient: {
            item: "mekanism:pellet_polonium"
        },
        catalyst:{
            item: "extendedcrafting:crystaltine_catalyst"
        },
        result:{
            item: 'kubejs:laimx_ingot'
        }
    })
    event.custom({
        type: "extendedcrafting:compressor",
        powerCost: 1000000,
        inputCount : 64,
        ingredient: {
            item: "kubejs:engagement_ring"
        },
        catalyst:{
            item: "extendedcrafting:crystaltine_catalyst"
        },
        result:{
            item: 'kubejs:blakdestroyer_ingot'
        }
    })
    event.shaped('kubejs:engagement_ring', [
        'GEG',
        'G G',
        'GGG'
      ], {
        G: 'minecraft:gold_ingot',
        E: 'extendedcrafting:ender_star'
      })
      event.shaped('extendedcrafting:the_ultimate_ingot', [
        'ABC',
        'DEF',
        'GHI'
      ], {
        A: 'kubejs:laimx_plate',
        B: 'kubejs:roboss_ingot',
        C: 'kubejs:roboss_plate',
        D: 'kubejs:laimx_ingot',
        E: 'extendedcrafting:ultimate_singularity',
        F: 'kubejs:kikongin_ingot',
        G: 'kubejs:blakdestroyer_plate',
        H: 'kubejs:blakdestroyer_ingot',
        I: 'kubejs:kikongin_plate'
      })
      
      event.shaped('kubejs:roboss_gear', [
        ' G ',
        'GEG',
        ' G '
      ], {
        G: 'kubejs:roboss_ingot',
        E: 'minecraft:iron_nugget'
      })
      event.shaped('kubejs:kikongin_gear', [
        ' G ',
        'GEG',
        ' G '
      ], {
        G: 'kubejs:kikongin_ingot',
        E: 'minecraft:iron_nugget'
      })
      event.shaped('kubejs:laimx_gear', [
        ' G ',
        'GEG',
        ' G '
      ], {
        G: 'kubejs:laimx_ingot',
        E: 'minecraft:iron_nugget'
      })
      event.shaped('kubejs:blakdestroyer_gear', [
        ' G ',
        'GEG',
        ' G '
      ], {
        G: 'kubejs:blakdestroyer_ingot',
        E: 'minecraft:iron_nugget'
      })
      event.custom({
        type: "thermal:press",
        ingredient: {
          item: "kubejs:roboss_ingot"
        },
        result: [
          {
            item: "kubejs:roboss_plate"
          }
        ]
      })
      event.custom({
        type: "thermal:press",
        ingredient: {
          item: "kubejs:kikongin_ingot"
        },
        result: [
          {
            item: "kubejs:kikongin_plate"
          }
        ]
      })
      event.custom({
        type: "thermal:press",
        ingredient: {
          item: "kubejs:laimx_ingot"
        },
        result: [
          {
            item: "kubejs:laimx_plate"
          }
        ]
      })
      event.custom({
        type: "thermal:press",
        ingredient: {
          item: "kubejs:blakdestroyer_ingot"
        },
        result: [
          {
            item: "kubejs:blakdestroyer_plate"
          }
        ]
      })
      event.shaped('kubejs:statue_roboss', [
        'GGG',
        'GGG',
        'GGG'
      ], {
        G: 'kubejs:roboss_ingot'
      })
      event.shaped('kubejs:statue_kikongin', [
        'GGG',
        'GGG',
        'GGG'
      ], {
        G: 'kubejs:kikongin_ingot'
      })
      event.shaped('kubejs:statue_laimx', [
        'GGG',
        'GGG',
        'GGG'
      ], {
        G: 'kubejs:laimx_ingot'
      })
      event.shaped('kubejs:statue_blakdestroyer', [
        'GGG',
        'GGG',
        'GGG'
      ], {
        G: 'kubejs:blakdestroyer_ingot'
      })

})

