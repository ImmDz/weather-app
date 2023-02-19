export const fetchData = async (city: string) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?appid=0f11ed7c3a60f593c7dc3911ce35d06a&q=${city}&units=metric`)
        .then((data) => {
            if(data.ok) {
                return data.json();
            }
            throw new Error("network is offline");
        });

};
