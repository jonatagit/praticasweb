module.exports = app => {

    app.get('/agendamento', (req, resp) =>
        resp.send('Get Agendamento Fujioka')
    )

    app.post('/agendamento', (req, resp) => {
    console.log(req.body);
    res.send('Post Agendamento Fujioka')
});

}