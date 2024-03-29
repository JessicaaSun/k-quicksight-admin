import React from 'react';
import SummaryDash from "@/components/Table/SummaryDash";
import UserBar from "@/components/Table/UserBar";
import UserLine from "@/components/Table/UserLine";

export default function AdminDashboard (){

    return(
        <section>
            <div className={"py-10 mr-10"}>
                <SummaryDash/>
                <div className={"grid grid-cols-2 gap-10 mt-14"}>
                    <div className={"shadow-md"}>
                        <UserLine/>
                    </div>
                    <div className={"shadow-md"}>
                        <UserBar/>
                    </div>
                </div>
            </div>
        </section>
    )
}