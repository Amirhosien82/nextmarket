import { supabase } from "@/app/_lib/supabase";


interface IInsertComment {
    productId: number,
    userId: number,
    title: string,
    comment: string,
    like: number,
    dislike: number
}

async function getIdUser(fullName: string): Promise<number> {

    const { data: user, error } = await supabase
        .from('user')
        .select('id').eq("fullName", fullName).single()
    if (error) {
        throw new Error(error.message);
    }
    return user.id;
}

async function insertComment(data: IInsertComment) {




    const { data: comment, error } = await supabase
        .from('comment')
        .insert([
            data
        ])
        .select()

    if (error) {
        throw new Error(error.message);
    }

    return comment.at(0) as {
        id: number;
        title: string;
        comment: string;
        like: number;
        dislike: number;
        fullName: string;
        productId: number;
    };

}

export { insertComment, getIdUser }