import { user_credential_model, user_credentials } from '../db_schemas/user_credentials';
import { user } from '../db_schemas/user';
import { Types } from 'mongoose';
import * as bcrypt from 'bcrypt';

export namespace user_service {
    /**
     * Creates a new user.
     *
     * @param first_name user's first name
     * @param last_name user's last name
     * @param username user's username
     * @param password user's password
     */
    export async function create_user(first_name: string, last_name: string, username: string, password: string): Promise<void> {
        let new_user_document = await user_credential_model.create({
            first_name,
            last_name,
            username,
            password: await bcrypt.hash(password, 12),
        });
    }

    /**
     * Returns user credential document from their username.
     *
     * @param username username to be looked up.
     */
    export async function get_user_credentials_from_username(username: string): Promise<user_credentials | null> {
        return await user_credential_model.findOne({ username });
    }

    /**
     * Returns user credential document from their username.
     *
     * @param username username to be looked up.
     */
    export async function get_user_from_username(username: string): Promise<user> {
        return (await get_user_credentials_from_username(username))?.user as user;
    }

    /**
     * Returns user credential document from their user id.
     *
     * @param user_id user id to be looked up.
     */
    export async function get_user_credentials_from_id(user_id: Types.ObjectId): Promise<user_credentials | null> {
        return await user_credential_model.findById(user_id);
    }

    /**
     * Returns true if username exists in database.
     *
     * @param username username to be looked up.
     */
    export async function is_username_in_use(username: string): Promise<boolean> {
        return get_user_credentials_from_username(username) != null;
    }
}
