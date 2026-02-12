import { ThemedCard } from "@/presentation/shared/ThemedCard";
import { ThemedSwitch } from "@/presentation/shared/ThemedSwitch";
import { ThemedView } from "@/presentation/shared/ThemedView";
import { useState } from "react";

const Switches = () => {
  const [enable, setEnable] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView className="m-5">
      <ThemedCard>
        {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={enable.isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setEnable({ ...enable, isActive: value })}
          value={enable.isActive}
        /> */}
        <ThemedSwitch
          text="Activo"
          value={enable.isActive}
          onValueChange={(value) => setEnable({ ...enable, isActive: value })}
          className="mb-2"
        />

        <ThemedSwitch
          text="Hambriento"
          value={enable.isHungry}
          onValueChange={(value) => setEnable({ ...enable, isHungry: value })}
          className="my-4"
        />

        <ThemedSwitch
          text="Contento"
          value={enable.isHappy}
          onValueChange={(value) => setEnable({ ...enable, isHappy: value })}
          className="mb-2"
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
