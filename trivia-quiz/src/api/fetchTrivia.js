import axios from "axios";

export async function fetchTrivia() {
    const response = await axios.get("https://opentdb.com/api.php?amount=10&type=multiple");
    return response.data.results;
}
