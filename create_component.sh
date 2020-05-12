echo Enter the component name?
read component
echo Enter the file type?
read file_type

mkdir $component
cd $component
#Create styles file
touch $component.styles.$file_type
echo "import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
"  >> $component.styles.$file_type

touch $component.$file_type
echo "  
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './${component}.styles';
import {  } from './${component}.action';

interface I${component}State{ }
interface I${component}Props{ }

export const ${component} = (props: I${component}Props) => {
    const [state, setState] = useState<I${component}State>({ });

    return (
        <View style={styles.container}>
            
        </View>
    );
}

" >> $component.$file_type

touch index.$file_type

echo "export * from './${component}';" >> index.$file_type

touch ${component}.action.${file_type}
