export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddEditScreen" component={AddEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 