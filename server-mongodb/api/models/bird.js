const { init } = require('../dbInit')
const { ObjectId } = require('mongodb')

class Bird {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.colour = data.colour;
        this.location = data.location;
        this.number = data.number;
    }

    static get all() {
        return new Promise(async(resolve, reject) => {
            try {
                const db = await init()
                const birdsData = await db.collection('birds').find().toArray()
                console.log('finding birds')
                const birds = birdsData.map(d => new Bird({...d, id: d._id }))
                console.log(birds)
                resolve(birds);
            } catch (err) {
                console.log(err);
                reject("Error retrieving birds")
            }
        })
    }

    static findById(id) {
        return new Promise(async(resolve, reject) => {
            try {
                const db = await init();
                let birdData = await db.collection('birds').find({ _id: ObjectId(id) }).toArray()
                console.log("this is data" +
                    birdData)
                let bird = new Bird({...birdData[0], id: birdData[0]._id });
                resolve(bird);
            } catch (err) {
                reject('Bird not found');
            }
        });
    }
}

module.exports = Bird