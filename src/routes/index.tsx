import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { useSteel } from "@/lib/steel/store";

const AuraStage = lazy(() =>
  import("@/components/aura-stage").then(({ AuraStage }) => ({ default: AuraStage })),
);
const SteelConsole = lazy(() =>
  import("@/components/steel-console").then(({ SteelConsole }) => ({ default: SteelConsole })),
);
const SteelDesk = lazy(() =>
  import("@/components/steel-desk").then(({ SteelDesk }) => ({ default: SteelDesk })),
);
const SteelHosts = lazy(() =>
  import("@/components/steel-hosts").then(({ SteelHosts }) => ({ default: SteelHosts })),
);
const SteelKernel = lazy(() =>
  import("@/components/steel-kernel").then(({ SteelKernel }) => ({ default: SteelKernel })),
);
const SteelAudit = lazy(() =>
  import("@/components/steel-audit").then(({ SteelAudit }) => ({ default: SteelAudit })),
);
const SteelPipeline = lazy(() =>
  import("@/components/steel-pipeline").then(({ SteelPipeline }) => ({ default: SteelPipeline })),
);
const SteelStudio = lazy(() =>
  import("@/components/steel-studio").then(({ SteelStudio }) => ({ default: SteelStudio })),
);

export const Route = createFileRoute("/")({ component: Home });

function ModuleFallback() {
  return (
    <div className="rounded-[var(--radius-md)] border border-rule bg-raised p-6 font-mono text-xs tracking-wide text-muted">
      LOADING STEEL MODULE…
    </div>
  );
}

function Home() {
  const tab = useSteel((s) => s.tab);
  return (
    <AppShell>
      <Suspense fallback={<ModuleFallback />}>
        {tab === "desk" ? <SteelDesk /> : null}
        {tab === "studio" ? <SteelStudio /> : null}
        {tab === "console" ? <SteelConsole /> : null}
        {tab === "aura" ? <AuraStage /> : null}
        {tab === "pipeline" ? <SteelPipeline /> : null}
        {tab === "hosts" ? <SteelHosts /> : null}
        {tab === "kernel" ? <SteelKernel /> : null}
        {tab === "audit" ? <SteelAudit /> : null}
      </Suspense>
    </AppShell>
  );
}
