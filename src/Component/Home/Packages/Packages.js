import React from 'react';
import PakageData from '../PakageData/PakageData';
import './pakage.css'


const ourPakages = [
    {

        id: 1,
        name: ' Standard Package',
        subtitle: ' 50 Clothes Per Month',
        icon: '',
        name1: '4 T-Shirts',
        name2: ' 1 Pairs of Jeans',
        name3: ' 3 Button-Down Shirts',
        name4: '1 Pair of Shorts',
        name5: '6 Pairs of Underwear',
        name6: '4 Pairs of Socks',
        name7: '1 Towel',
        name8: '1 Set of Sheets',
        price: '598'


    },
    {

        id: 2,
        name: 'Enterprise Package',
        subtitle: ' 60 Clothes Per Month',
        icon: '',
        name1: '4 T-Shirts',
        name2: ' 2 Pairs of Jeans',
        name3: ' 4 Button-Down Shirts',
        name4: '2 Pair of Shorts',
        name5: '8 Pairs of Underwear',
        name6: '6 Pairs of Socks',
        name7: '2 Towel',
        name8: '2 Set of Sheets',
        price: '789'


    },
    {

        id: 3,
        name: 'Premium Package',
        subtitle: ' 80 Clothes Per Month',
        icon: '',
        name1: '6 T-Shirts',
        name2: ' 3 Pairs of Jeans',
        name3: '4 Button-Down Shirts',
        name4: '2 Pair of Shorts',
        name5: '9 Pairs of Underwear',
        name6: '8 Pairs of Socks',
        name7: '2 Towel',
        name8: '2 Set of Sheets',
        price: '825',
        price2:'$999.00'


    }
]

const Packages = () => {

    return (
        <section className="packages-section container mt-5 pt-5 pt-5">
            <h5 class="text-small  text-center mt-5">What We Offer</h5>
            <h1 className="text-brand text-center">Price Packages</h1>

            <div className="row ">
                {
                    ourPakages.map(pakage => <PakageData pakage={pakage} key={pakage.id}> </PakageData>)
                }
            </div>
        </section>
    );
};

export default Packages;