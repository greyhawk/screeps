/*
 * find the rampart to repair
 */
module.exports = function (room) {
    var min_rampart=null;

    var structures = room.find(FIND_MY_STRUCTURES, {
        filter: function(object) {
            if(object.structureType != STRUCTURE_RAMPART ) {
                return false;
            }
            return true;
        }
    });

    if (structures.length) {
        for ( i in structures ) {
            if ( min_rampart == null || structures[i].hits < min_rampart.hits) {
                min_rampart = structures[i];
            }
        }
    }

    return min_rampart;
}