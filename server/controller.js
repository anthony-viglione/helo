module.exports = {
    register: async (req, res) => {
        console.log('hit controller register')
        console.log({body: req.body})
        const {username, password} = req.body;
        let profile_pic = `https://robohash.org/${username}?set=set4`
        const db =req.app.get('db');
        let newperson = await db.new_user({username, password, profile_pic})
        console.log({newperson})
        res.status(200).send(newperson)
    }
}