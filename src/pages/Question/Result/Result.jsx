import "./style.css";
import Card from "../../../components/Card";
import Text from "../../../components/Text";
import { useSelector } from "react-redux";

const Result = () => {
    const { data } = useSelector(state => state.question);

    return(
        <section className="question-result-page">
            <Card className="w-full mb-4 flex flex-col border-t-4 border-t-sky-700">
                <Text className="mb-1 font-bold text-2xl">THANK YOU FOR YOUR TIME</Text>
                <Text className="text-sm text-slate-500">Jawaban anda telah kami rekam, terimkasih.</Text>
            </Card>

            {data.map(item => (
                <Card.Question data={item}
                    className="w-full max-w-lg mb-4 flex flex-col"
                    disabled={true}
                />
            ))}
        </section>
    )
}

export default Result;