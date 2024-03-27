const Offers = () => {

    const fetchData = async () => {
        try {
            const response = await axios.get("https://site--exo-back-end-deliveroo--l75gkv7mvq6s.code.run/");
            console.log(response.data);
            console.log(setData);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error.response);
        }
    };
    return (
        <>

            {/* {data.offers.map((clothes, inde) =>
                <h3>{data.offers.product_name}</h3>
            )} */}

        </>
    )
}

export default Offers;