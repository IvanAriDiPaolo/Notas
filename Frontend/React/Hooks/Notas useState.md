    const [counters, setCounters] = useState({
        counter1: 10,
        counter2: 20
    });

    const { counter1, counter2 } = counters;


    const handleAdd = () => {
        setCounters({
            ...counters,
            counter1: counter1 + 1
        })
}
