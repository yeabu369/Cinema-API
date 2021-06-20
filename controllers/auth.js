const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User, Role, ROLES, Sequelize } = require('../models');

const Op = Sequelize.Op;

const secret = 'test';

const getAuth = (req, res) => {
    return res.render('Auth', { title: 'Auth'})
};

const signIn = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ where: { Email: email } });

        if (!user)
            res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        res.status(200).json({ result: user, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const signUp = async (req, res) => {

    const { firstname, lastname, email, password, roles } = req.body;

    try {

        let user = await User.findOne({ where: { Email : email }});

        if (user) return res.status(400).json({ message: "User already exists" });
        
        user = await User.create({
            FullName: `${firstname} ${lastname}`,
            Email: email,
            Password: bcrypt.hashSync(password, 12)
        });

        const token = jwt.sign( { email: user.email, id: user.id }, secret, { expiresIn: "1d" } );

        if (roles) {
            const Roles = await Role.findAll({
                where: { Type: { [Op.or]: roles } }
            });

            console.log(Roles);
            await user.setRoles(Roles);
            return res.status(201).json({ user, token });
        } else {

            const defaultRole = await Role.findOne({ where: {
                id: 1
            }});
            
            const role = await user.setRoles(defaultRole);
            return res.status(201).json({ user, token });
        }
        
    } catch (err) {

        res.status(500).json({ message: "Something went wrong" });
        console.log(err);
    }
}


module.exports = { getAuth, signIn, signUp };

