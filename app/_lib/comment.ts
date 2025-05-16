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




    const {data:datas, error } = await supabase
        .from('comment')
        .insert([
            data
        ])
        .select()

    if (error) {
        throw new Error(error.message);
    }
console.log(datas,error);


}

export { insertComment, getIdUser }