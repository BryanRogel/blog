const nanoid   = require('nanoid');
const fs       = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const ask = (text)=> new Promise((resolve, reject)=>{
    readline.question(text, (answer)=>resolve(answer));
});

const validarSiNo = (res)=>{
    return !res || res =='s' || res == 'S';
}

const validarContenido = async (contenido, length)=>{
    const result = await ask(`${contenido}: `);

    if(result.length>length){
        console.log(`${contenido} sobrepasa la cantidad de caracteres sugeridos(${length}) por ${result.length-length} caracteres`);
        const res = validarSiNo(await ask('Continuar? s/n: '));

        if(res) return result;
        
        return validarContenido(contenido, length);
    }

    return result;
}

const getPost= async ()=>{
    console.log("\n\nDetalles del nuevo post");
    console.log('------------------------');

    const date = new Date();
    const metaData={
        id         : nanoid(),
        date       : `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
        time       : `${date.getHours()}:${date.getMinutes()}`,
        isPublished: false
    }

    const post = {
        title      : '',
        description: '',
        cover      : '',
        tags       : [],
        slug       : ''
    }

    post.title       = await validarContenido('Titulo',65);
    post.description = await validarContenido('Descripcion', 160);
    post.cover       = await ask('Imagen de portada: ');
    const preTags    = await ask("Tags (separados por comas): ");
    post.tags        = preTags.split(',').map(item=>item.trim());

    
    
    let res; 
    res = validarSiNo(await ask('Slug automatico s/n: '));

    if(res)
        post.slug = post.title.split(' ').join('-');
    else
        post.slug = await ask('Slug personalizado: ');
    

    console.log('------------------------');
    console.log(post);
    console.log('------------------------');

    res = validarSiNo(await ask('Informacion correcta? s/n: '));
    if(res)
        return {...metaData, ...post};
    else
        return getPost();
    
}

const makeYamlHeader=(contenido)=>{
    let res = '---';

    for (const key in contenido){
        if(Array.isArray(contenido[key])){
            res+=`\n${key}: [`;
            for (const item of contenido[key])
                res+=`'${item}',`;
            res+=']';
        }else{
            res+=`\n${key}: "${contenido[key]}"`;
        }
    }

    res+='\n---';

    return res;
}

const pathLinks = './links';
(async ()=>{
    try {
        const post = await getPost();
        const metaData = makeYamlHeader(post);
        fs.writeFileSync(`./assets/articulos/${post.slug}.md`,metaData);

        const links = require(pathLinks);
        links.unshift(post);
    
        fs.writeFileSync(`${pathLinks}.js`,`module.exports  = ${JSON.stringify(links)}`);
    } catch (error) {
        console.log('error :', error);
    }

    process.exit();
})();

module.exports = {pathLinks}