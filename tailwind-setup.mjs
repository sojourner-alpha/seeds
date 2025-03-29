import {execSync} from 'child_process'; try {execSync('npx tailwindcss init -p', {stdio: 'inherit'});} catch(e) {console.error(e);}
