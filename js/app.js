$(document).ready(function() {
    console.log('ready!');

    router.get('/', (req, res, next) => {
        res.sendFile('index.html');
    });
    
})
