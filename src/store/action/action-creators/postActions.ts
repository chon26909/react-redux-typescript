import { Action } from "../index";
import Post from "../../../models/postModel";
import ActionType from "../action-types";
import { Dispatch } from "react";
import axios from "axios";

export const getPosts = () => async (dispatch: Dispatch<Action>) => {
    try {

        //loading wait data
        dispatch({ type: ActionType.GET_POST_REQUEST })

        //fetch data
        const { data } = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=2000");

        //set data into state
        dispatch({ type: ActionType.GET_POST_SUCCESS, payload: data})

    } catch (error:any) {

        //set error into state
        dispatch({ type: ActionType.GET_POST_FAIL, payload:error.message })
    }
}