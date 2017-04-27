exports.seed = function seed( knex, Promise ) {

    var tableName = 'birds';
    var currentTime = new Date();

    var rows = [

        {
            owner: 'f3fc4f70-2b4f-11e7-aabb-183da26ab8c4',
            species: 'Columbidae',
            name: 'Pigeon',
            picture_url: 'http://pngimg.com/upload/pigeon_PNG3423.png',
            guid: '4c8d84f1-9e41-4e78-a254-0a5680cd19d5',
            isPublic: true,
            created_at: currentTime
        },

        {
            owner: '571b1fdc-2b50-11e7-aabb-183da26ab8c4',
            species: 'Zenaida',
            name: 'Mourning dove',
            picture_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mourning_Dove_2006.jpg/220px-Mourning_Dove_2006.jpg',
            guid: 'ddb8a136-6df4-4cf3-98c6-d29b9da4fbc6',
            isPublic: false,
            created_at: currentTime
        },

    ];

    return knex( tableName )
        .del()
        .then( function() {
            return knex.insert( rows ).into( tableName );
        });

};
