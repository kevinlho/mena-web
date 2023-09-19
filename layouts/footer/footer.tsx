import styles from "./footer.module.css";
import React from "react";

import {Image} from "@nextui-org/react";

const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
            <section>
            <Image
                width={100}
                height={100}
                alt="NextUI hero Image with delay"
                src="./mena-logo.png"
            />    
            </section>
            <section className="flex flex-row">
            <div className="flex flex-1">
        
            </div>
            <div className="flex-1">
                <div> hello world </div>
                <div> hello world </div>
                <div> hello world </div>
            </div>
            <div className="flex-1">
                <div> hello world </div>
                <div> hello world </div>
                <div> hello world </div>
            </div>
            </section>
        </footer>
	);
};

export default Footer
