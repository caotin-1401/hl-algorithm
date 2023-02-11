import express from 'express';

let router = express.Router();

let initRoutes = (app) => {
    router.get('/', (req, res) => {
        let array = [];
        for (let i = 0; i < 5; i++) {
            let data = Math.floor(Math.random() * 101);
            array.push(data);
        }
        let min = array[0];
        let max = array[0];
        let count = array[0];
        let even = 0;
        let odd = 0;
        if (array[0] % 2 === 0) even = 1;
        else odd = 1;
        for (let i = 1; i < 5; i++) {
            count = count + array[i];
            if (min > array[i]) min = array[i];
            if (max < array[i]) max = array[i];
            if (array[i] % 2 === 0) even = even + 1;
            else odd = odd + 1;
        }
        res.render('index', {
            array,
            max,
            min,
            count,
            even,
            odd,
        });
    });
    return app.use('/', router);
};

export default initRoutes;
