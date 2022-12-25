---
---

# New WEB projects

## Project Creation
- with NPX
  - `npx create-react-app reactappname --template typescript`
  - `cd reactappname`
  - `npx start`

## Project Structure
- public/
- src/
  - src/App.css
  - src/App.test.tsx
  - src/App.tsx
  - src/index.css
  - src/index.tsx
  - src/logo.svg
  - src/react-app-env.d.ts
  - src/reportWebVitals.ts
  - src/setupTests.ts
- package-lock.json
- package.json
- tsconfig.json

- App.tsx
  - script of app initialization
  - script writen in typescrit
  - script using JSX declaration
    - `const element = <h1>Hello, world!</h1>;`
    - `const element = <h1>Hello, {name}</h1>;`
    - Execute any JavaScript expression inside JSX "{" "}".
  - ```
    import { StatusBar } from 'expo-status-bar';
    import { StyleSheet, Text, View } from 'react-native';
    export default function App() {
      return (
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      );
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    });
    ```  
  - babel.config.js (javascript configurations)
  - tscofig.json (typescript configurations)

## Fundamentals
- components
- JSX
- props
- state
