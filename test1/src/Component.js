import React from 'react'

function Searchresults({ result }) {
    return (
        <div>

            <table >
                <tr>
                    <th>index</th>
                    <th>Place Name</th>
                    <th>flag</th>
                </tr>



                {
                result[0]=='No result found'?(<tr>No result found</tr>):
                result.map((item, index) => {

                    let url = "https://www.countryflags.io/" + item.CountryId.slice(0, 2) + "/flat/16.png"
                    console.log(url);
                    return (
                        <tr key={item.CityId}>
                            <td>{index+1}</td>
                            <td>{item.PlaceName}</td>
                            <td>
                                <img src={url} alt="No result found" />  
                                {"  "+item.CountryName}</td>
                        </tr>
                    )
                })}

            </table>


        </div>
    )
}

export default Searchresults