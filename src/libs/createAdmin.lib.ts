import bcrypt from "bcryptjs";
import Administrative from "../models/Administrative.model";

const createAdmin = async () => {
    const admin = {
        first_name: "Valentina",
        second_name: "",
        first_last_name: "V",
        second_last_name: "V",
        identification: "123456789",
        email: "vale@gmail.com",
        password: "vale123",
        appointment: 'programmer',
    };

    try {
        const adminExists = await Administrative.findOne({ where: { email: admin.email } });

        if (adminExists) {
            console.log('Admin exists');
            return;
        }

        const encryptedPassword = await bcrypt.hash(admin.password, 10);

        await Administrative.create({
            ...admin,
            password: encryptedPassword,
            role: "administrative",
        });

        console.log("Admin created");

    } catch (error) {
        console.error("Error creating admin ", error);
    }
};

export default createAdmin;